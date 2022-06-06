import React from 'react'
import { TrendData } from '../../data/TrendData';
import "./TrendCard.css";

const TrendCard = ({data}) => {
  return (
    <div className="trendCard">
      <h1>Trends for you</h1>
      {TrendData.map((trend, id) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        )
      })}
    </div>
  )
}

export default TrendCard