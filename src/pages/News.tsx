import React from 'react'
import NewsList from '../components/NewsList';
import { useGetFeedsQuery } from '../redux/feature/news.feature';
import AsyncWrapper from '../layouts/AsyncWrapper';

const News = () => {
  const {data,isLoading,error}=useGetFeedsQuery({
    query:'Cryptocurrencies',
    count:15

  })
  return (
    <AsyncWrapper error={error} loading={isLoading} fulfilled={Boolean(data)}>
    { Boolean(data)&&<NewsList feeds={data.value}/>}
    </AsyncWrapper>
    
  )
}

export default News;