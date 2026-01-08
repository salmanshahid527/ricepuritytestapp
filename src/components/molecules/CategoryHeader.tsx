import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface CategoryHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <Heading size="2xl" className="mb-2">
        {title}
      </Heading>
      {description && (
        <Text variant="body" color="muted">
          {description}
        </Text>
      )}
    </div>
  );
};
