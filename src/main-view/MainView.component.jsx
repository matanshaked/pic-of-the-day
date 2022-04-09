import { APIKey, PicOfTheDayUrl } from "../consts.component";
import DatesPicker from "../date-picker/DatesPicker.component";

import "./MainView.style.scss"

import { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";

const MainView = () => {
  const [chosenDate, setChosenDate] = useState();
  const [picOfTheDayData, setPicOfTheDayData] = useState();

  useEffect(() => {
    const getDataByDate = async (key, date) => {
      setPicOfTheDayData(null);
      const formattedDate = dateFormat(date, "yyyy-mm-dd");
      const response = await axios.get(PicOfTheDayUrl, {
        params: {
          api_key: key,
          date: formattedDate,
        },
      });
      setPicOfTheDayData(response);
    };

    getDataByDate(APIKey, chosenDate);
  }, [chosenDate]);

  useEffect(() => {
    picOfTheDayData && console.log(picOfTheDayData);
  }, [picOfTheDayData]);

  return (
    
      <div>
        <DatesPicker
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
        ></DatesPicker>
        {picOfTheDayData?.data && 
          <div>
            <h1>{picOfTheDayData.data.title}</h1>
            <img
              className="picture"
              src={picOfTheDayData.data.url}
              alt="pic of the day"
            />
          </div>
        }
      </div>
        
  );
};

export default MainView;
