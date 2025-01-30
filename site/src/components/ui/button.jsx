import React from 'react'

export function Button({ children, className = '', asChild = false, ...props }) {
  if (asChild && React.isValidElement(children)) {
    // Merge props and classes into the child element
    return React.cloneElement(children, {
      ...props,
      className: [children.props.className, className].join(' '),
    })
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
