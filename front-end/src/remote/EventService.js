import { api } from "./api";

// eslint-disable-next-line
export default {
  createEvent: async (props, token) => {
    const payload = {
      name: props.name,
      detail: props.detail,
      date: props.date,
    };

    return await api
      .post(import.meta.env.VITE_CREATE_EVENT, payload, token)
      .then((data) => {
        return data;
      });
  },
  fetchEventList: async (props, token) => {
    return await api
      .getPaginated(
        import.meta.env.VITE_EVENT_LIST + "/" + props.eventType,
        props,
        token
      )
      .then((data) => data);
  },
  fetchUserEvents: async (type, props, token) => {
    return await api
      .getPaginated(
        import.meta.env.VITE_USER_EVENTS + "/" + type,
        props,
        token
      )
      .then((data) => {
        return data;
      });
  },
  subscribeUserToEvent: async (eventId, token) => {
    let uri = import.meta.env.VITE_USER_EVENTS_SUBSCRIBE.replace(
      "{eventId}",
      eventId
    );
    await api.postWithoutBody(uri, token);
  },
};
