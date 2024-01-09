export const ReservationDatesAndPrice = (
  startDate,
  endDate,
  hotelsPrice,
  roomsPrice
) => {
  const MSecond_per_day = 1000 * 86400;
  const datesLength =
    (Math.abs(endDate?.getTime() - startDate?.getTime()) || 0) /
    MSecond_per_day;
  const totalHotelsPrice = datesLength * hotelsPrice || 0;
  const totalRoomsPrice = datesLength * roomsPrice || 0;
  return { datesLength, totalHotelsPrice, totalRoomsPrice };
};
