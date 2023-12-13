import React from "react";
import Spinner from "../components/Spinner";

// Define the AsyncWrapperProps type
type AsyncWrapperProps = {
  loading: boolean;
  fulfilled: boolean;
  error: any; // You can replace 'any' with the appropriate error type if needed
  children: React.ReactNode;
};

function AsyncWrapper(props: AsyncWrapperProps) {
  if (props.loading) {
    return <Spinner />;
  } else if (props.error) {
    // console.error("An error occurred:", props.error);
    return props.error ;
    //  if (props.error.status === 404) {
    //    return (
    //      <div>
    //        <h2>Resource Not Found</h2>
    //        <p>The requested resource could not be found.</p>
    //      </div>
    //    );
    //  }

    //  // Handle other types of errors
    //  return (
    //    <div>
    //      <h2>Something went wrong...</h2>
    //      <p>{props.error.message || "Unknown error"}</p>
    //    </div>
    //  );
  } else if (props.fulfilled) {
    return props.children;
  } else {
    return <>Something has happened</>;
  }
}

// You likely intended to set default values instead of defaultValue
AsyncWrapper.defaultProps = {
  loading: true,
  fulfilled: false,
  error: null,
  children: <></>,
};

export default AsyncWrapper;
