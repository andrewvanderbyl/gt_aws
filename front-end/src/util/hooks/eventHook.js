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

  const fetchUserEvents = async (type, props, token) => {
    return await EventService.fetchUserEvents(type, props, token).then(
      (events) => events
    );
  };

  const subscribeUserToEvent = async (eventId, token) => {
    await EventService.subscribeUserToEvent(eventId, token);
  };

  return { createEvent, fetchEventList, fetchUserEvents, subscribeUserToEvent };
};
