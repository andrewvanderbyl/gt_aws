import EventService from "../../remote/EventService";
import { useSessionStorage } from "./sessionStorageHook";

export const useEvent = () => {
  const sessionStorage = useSessionStorage();

  const createEvent = async (props) => {
    return await EventService.createEvent(
      props,
      sessionStorage.sessionStorageValue
    ).then((eventData) => {
      return eventData;
    });
  };

  const fetchEventList = async (props) => {
    return await EventService.fetchEventList(
      props,
      sessionStorage.sessionStorageValue
    ).then((events) => events);
  };

  const fetchUserEvents = async (type, props) => {
    return await EventService.fetchUserEvents(
      type,
      props,
      sessionStorage.sessionStorageValue
    ).then((events) => events);
  };

  const subscribeUserToEvent = async (eventId) => {
    await EventService.subscribeUserToEvent(
      eventId,
      sessionStorage.sessionStorageValue
    );
  };

  return { createEvent, fetchEventList, fetchUserEvents, subscribeUserToEvent };
};
