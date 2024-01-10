import { useEffect, useState } from "react";
import axios from "axios";

const useCreateOrder = (url, orderData, createOrderState) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post(url, orderData);
        console.log(res);
      } catch (error) {
        console.log("上傳失敗");
      }
    };

    if (createOrderState) createOrder();
  }, [createOrderState]);

  return { order };
};

export default useCreateOrder;
