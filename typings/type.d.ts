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

interface SimpleReactValidator {
  content: any;
}
