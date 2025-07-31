function Loader({ size = "lg", variation, loader, className }) {
  const variationClasses = {
    danger: "border-t-destructive border-gray-200",
    warning: "border-t-warning border-white",
    success: "border-t-success border-gray-200",
    info: "border-t-info border-gray-200",
    default: "border-t-primary border-gray-200",
  };

  const sizeClasses = {
    sm: "h-8 w-8 border-4 border-t-5",
    md: "h-10 w-10 border-4 border-t-5",
    lg: "h-20 w-20 border-8 border-t-5",
    full: "h-16 w-16 border-8 border-t-5",
  };

  const chosenVariation = variationClasses[variation] || variationClasses.default;
  const chosenSize = sizeClasses[size] || sizeClasses.lg;

  if (loader) {
    return (
      <div
        className={`loader animate-loader ease-linear rounded-full ${chosenSize} ${chosenVariation} ${className}`}
      ></div>
    );
  }

  if (size === "sm") {
    return (
      <div className="w-full min-h-[100px] flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className="loader animate-loader ease-linear rounded-full border-8 border-t-5 border-gray-200 border-t-primary h-10 w-10"></div>
      </div>
    );
  }

  if (size === "md") {
    return (
      <div className="w-full min-h-[100px] flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className="loader animate-loader ease-linear rounded-full border-8 border-t-5 border-gray-200 border-t-primary h-8 w-8"></div>
      </div>
    );
  }

  if (size === "lg") {
    return (
      <div className="w-full ">
        <div className="border-gray-200 m-auto my-40 h-20 w-20 animate-loader rounded-full  border-8 border-t-primary" />
      </div>
    );
  }

  if (size === "full") {
    return (
      <div className="w-full min-h-[75vh] flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className="loader animate-loader ease-linear rounded-full border-8 border-t-5 border-gray-200 border-t-primary h-16 w-16"></div>
      </div>
    );
  }
}

export default Loader;
