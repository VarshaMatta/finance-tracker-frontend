/// <reference types="vite/client" />

// Add JSX namespace to fix "Cannot find namespace 'JSX'" error
namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
