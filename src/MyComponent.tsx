import React from 'react';
import './MyComponent.css';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <p>This is a paragraph of text within my component.</p>
    </div>
  );
};

export default MyComponent;
