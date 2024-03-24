import EventService from "../../remote/EventService";

export const useEvent = () => {
  const createEvent = async (props) => {
    return await EventService.createEvent(props).then((eventData) => {
      return eventData;
    });
  };

  const fetchEventList = async (props) => {
    return await EventService.fetchEventList(props).then((events) => events);
  };

  return { createEvent, fetchEventList };
};
