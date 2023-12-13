// import React from 'react'
// import NewsList from '../components/NewsList';
// import { useGetFeedsQuery } from '../redux/feature/news.feature';
// import AsyncWrapper from '../layouts/AsyncWrapper';

// const News = () => {
//   const {data,isLoading,error}=useGetFeedsQuery({
//     query:'Cryptocurrencies',
//     count:15
//   })
//   // console.log(data,"<___________")
//   return (
//     <AsyncWrapper error={error} loading={isLoading} fulfilled={Boolean(data)}>
//     { Boolean(data)&&<NewsList feeds={data.value}/>}
//     </AsyncWrapper>
    
//   )
// }

// export default News;







import React from "react";
import NewsList from "../components/NewsList";
import { useGetFeedsQuery } from "../redux/feature/news.feature";

const News = () => {
  const { data, isLoading, error } = useGetFeedsQuery({
    query: "Cryptocurrencies",
    count: 15,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Customize the error message based on the error object
    return (
      <div>
        <h2>Something went wrong...</h2>
      </div>
    );
  }

  return (
    <div>
      {data && data.value && <NewsList feeds={data.value} />}
    </div>
  );
};

export default News;