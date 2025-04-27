type SecondaryColumnProps = {
  children?: React.ReactNode; // For wrapping content if needed
};

export function SecondaryColumn({ children }: SecondaryColumnProps) {
  return (
    <aside className="fixed top-16 bottom-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
      {/* Content for the secondary column will go here */}

      <p className="text-sm text-gray-500">
        Secondary Column Content Placeholder
      </p>
      {children}
    </aside>
  );
}
