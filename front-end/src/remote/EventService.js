import { api } from "./api";

export default {
  createEvent: async (props) => {
    const payload = {
      name: props.name,
      detail: props.detail,
      date: props.date,
    };

    return await api
      .post(process.env.REACT_APP_CREATE_EVENT, payload)
      .then((data) => {
        return data;
      });
  },
  fetchEventList: async (props) => {
    return await api
      .getPaginated(
        process.env.REACT_APP_EVENT_LIST + "/" + props.eventType,
        props
      )
      .then((data) => {
        return data;
      });
  },
  fetchUserEvents: async (type, props, userId) => {
    return await api
      .getPaginated(
        process.env.REACT_APP_USER_EVENTS + "/" + type,
        props,
        userId
      )
      .then((data) => {
        return data;
      });
  },
  subscribeUserToEvent: async (eventId, userId) => {
    let uri = process.env.REACT_APP_USER_EVENTS_SUBSCRIBE.replace(
      "{eventId}",
      eventId
    );
    await api.postWithoutBody(uri, userId);
  },
};
