declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.scss' {
    const [key]: string;
    export default content;
}

declare module 'mgn-smooth-scroll' {
  const content: any;
  export default content;
}

declare module 'simple-react-validator' {
  const content: any;
  export default content;
}

declare module '*lib/validator' {
  const content: any;
  export default content; 
}

declare module 'url-search-params-polyfill' {
  const content: any;
  export default content; 
}

declare module 'react-photo-gallery' {
  const content: any;
  export default content;
}

declare module 'react-images' {
  const content: any;
  export const Modal: (onClose: any, styles: any) => any;
  export const ModalGateway: (children: any) => any;
  export default content;
}