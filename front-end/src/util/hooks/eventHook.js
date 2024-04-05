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

  const fetchUserEvents = async (type, props, userId) => {
    return await EventService.fetchUserEvents(type, props, userId).then(
      (events) => events
    );
  };

  const subscribeUserToEvent = async (eventId, userId) => {
    await EventService.subscribeUserToEvent(eventId, userId);
  };

  return { createEvent, fetchEventList, fetchUserEvents, subscribeUserToEvent };
};
