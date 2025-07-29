import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

// Handle default export properly
const traverseAST = traverse.default || traverse;

function parseReactComponent(code) {
  // Parse the code into an AST
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  let result = null;

  traverseAST(ast, {
    JSXElement(path) {
      // Only process the outermost JSX element (skip nested ones handled recursively)
      if (path.parent.type !== 'JSXElement' && path.parent.type !== 'JSXFragment') {
        result = parseJSXElement(path.node);
      }
    },
    JSXFragment(path) {
      if (path.parent.type !== 'JSXElement' && path.parent.type !== 'JSXFragment') {
        result = parseJSXFragment(path.node);
      }
    }
  });

  return result;
}

function parseJSXElement(node) {
  const element = {
    tag: getElementName(node.openingElement.name),
    classes: getClasses(node.openingElement.attributes),
    children: []
  };

  // Add inline styles if present
  const inlineStyles = getInlineStyles(node.openingElement.attributes);
  if (Object.keys(inlineStyles).length > 0) {
    element.inline = inlineStyles;
  }

  // Process children
  if (node.children) {
    element.children = node.children
      .map(child => parseJSXChild(child))
      .filter(child => child !== null);
  }

  return element;
}

function parseJSXFragment(node) {
  const fragment = {
    tag: 'Fragment',
    classes: [],
    children: []
  };

  if (node.children) {
    fragment.children = node.children
      .map(child => parseJSXChild(child))
      .filter(child => child !== null);
  }

  return fragment;
}

function parseJSXChild(child) {
  switch (child.type) {
    case 'JSXElement':
      return parseJSXElement(child);
    
    case 'JSXFragment':
      return parseJSXFragment(child);
    
    case 'JSXText':
      // Skip whitespace-only text nodes
      if (child.value.trim() === '') {
        return null;
      }
      return {
        tag: 'text',
        classes: [],
        content: child.value.trim(),
        children: []
      };
    
    case 'JSXExpressionContainer':
      // For expressions, we just note that there's dynamic content
      return {
        tag: 'expression',
        classes: [],
        children: []
      };
    
    default:
      return null;
  }
}

function getElementName(nameNode) {
  switch (nameNode.type) {
    case 'JSXIdentifier':
      return nameNode.name;
    case 'JSXMemberExpression':
      return `${getElementName(nameNode.object)}.${nameNode.property.name}`;
    case 'JSXNamespacedName':
      return `${nameNode.namespace.name}:${nameNode.name.name}`;
    default:
      return 'unknown';
  }
}

function getClasses(attributes) {
  const classes = [];
  
  for (const attr of attributes) {
    if (attr.type === 'JSXAttribute' && 
        (attr.name.name === 'className' || attr.name.name === 'class')) {
      
      if (attr.value && attr.value.type === 'StringLiteral') {
        // Static class string
        classes.push(...attr.value.value.split(/\s+/).filter(c => c));
      }
      // For dynamic classNames (expressions), we could expand this
    }
  }
  
  return classes;
}

function getInlineStyles(attributes) {
  const styles = {};
  
  for (const attr of attributes) {
    if (attr.type === 'JSXAttribute' && attr.name.name === 'style') {
      if (attr.value && attr.value.type === 'JSXExpressionContainer') {
        const expression = attr.value.expression;
        
        if (expression.type === 'ObjectExpression') {
          // Static style object
          for (const prop of expression.properties) {
            if (prop.type === 'ObjectProperty' && 
                (prop.key.type === 'Identifier' || prop.key.type === 'StringLiteral')) {
              
              const key = prop.key.type === 'Identifier' ? prop.key.name : prop.key.value;
              
              if (prop.value.type === 'StringLiteral') {
                styles[key] = prop.value.value;
              } else if (prop.value.type === 'NumericLiteral') {
                styles[key] = prop.value.value;
              }
            }
          }
        }
      }
    }
  }
  
  return styles;
}

// Usage example
const reactCode = `
function UserProfile({ user }) {
  return (
    <div className="container flex" style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <img src={user.avatar} className="avatar" />
      <h2 className="title">
        <span className="highlight">Hello</span>
        {user.name}
      </h2>
    </div>
  );
}
`;

try {
  const parsed = parseReactComponent(reactCode);
  console.log(JSON.stringify(parsed, null, 2));
} catch (error) {
  console.error('Parse error:', error.message);
}

export { parseReactComponent };