const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primaryLight bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
    </div>
  );
};

export default Loading;
