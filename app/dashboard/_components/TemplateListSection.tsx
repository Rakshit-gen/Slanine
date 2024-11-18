import React, { Suspense, lazy, useMemo } from 'react';
import Templates from '@/app/(data)/Templates';
import { Skeleton } from '@/components/ui/skeleton';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: React.ElementType;
  category: string;
  aiPrompt: string;
  slug: string;
  form?: FormField[];
}

export interface FormField {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface TemplateListSectionProps {
  userSearchInput: string | undefined;
  isLoading?: boolean;
}

const TemplateSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-[125px] w-full rounded-lg" />
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
);

const TemplateCard = lazy(() => import('./TemplateCard'));

const TemplateListSection: React.FC<TemplateListSectionProps> = ({
  userSearchInput,
  isLoading = false,
}) => {
  const filteredTemplates = useMemo(() => {
    if (!userSearchInput) return Templates;

    const searchTerm = userSearchInput.toLowerCase().trim();
    return Templates.filter(
      (template) =>
        template.name.toLowerCase().includes(searchTerm) ||
        template.desc.toLowerCase().includes(searchTerm) ||
        template.category.toLowerCase().includes(searchTerm)
    );
  }, [userSearchInput]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <TemplateSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (filteredTemplates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
          No templates found
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Try adjusting your search terms
        </p>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <TemplateSkeleton key={index} />
          ))}
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.slug} {...template} />
        ))}
      </div>
    </Suspense>
  );
};

export default TemplateListSection;
