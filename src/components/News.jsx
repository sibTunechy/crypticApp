import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;



const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Crytocurrency', count: simplified ? 10 : 100})

  if(!cryptoNews?.value) return 'Loading...'     // looping over news
  
  return (
    <Row gutter={[ 24, 24]}>
      {}

    </Row>
  )
};

export default News;
