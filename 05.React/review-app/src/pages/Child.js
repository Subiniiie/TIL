import React, { useMemo } from 'react'

export default function Child({ title, dataList }) {
  const newDataList = useMemo(() => {
    console.log("---dataList---");

    return dataList.map((e) => {
      console.log(e);
      return e * 10;
    })
  }, [dataList]);

  return (
    <div>
      <h2>{title}</h2>
      {newDataList.map((d, idx) => (
        <div key={idx}>{d}</div>
      ))}    
    </div>
  );
};
