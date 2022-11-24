import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import G = google.accounts.oauth2;

const useGoogleIdentity = () => {
  const [client, setClient] = useState({} as G.TokenClient);

  function initClient() {
    setClient(
      google.accounts.oauth2.initTokenClient({
        client_id: process.env.NEXT_PUBLIC_G_CLIENT_ID || "TestKey",
        scope: "https://www.googleapis.com/auth/calendar.readonly",
        callback: handleCallback,
      })
    );
  }

  async function handleCallback(tokenResponse: G.TokenResponse) {
    if (tokenResponse && tokenResponse.access_token) {
      gapi.client.setToken(tokenResponse);
    }
  }

  function requestToken() {
    client.requestAccessToken();
  }

  function listUpcomingEvents() {
    console.log("listing events");
  }

  return { initClient, requestToken };
};

const useGApiClient = () => {
  function loadClient() {
    gapi.load("client", () => {
      gapi.client.init({});
    });
  }

  function getCalendarList() {
    gapi.client
      .request({
        path: "https://www.googleapis.com/calendar/v3/users/me/calendarList",
      })
      .then((r) => console.log(r.result));
  }

  function getEventList() {
    gapi.client
      .request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_G_CALENDAR_ID}/events`,
        params: {
          maxResults: 5,
          timeMax: "2022-11-26T00:00:00-07:00",
          timeMin: "2022-11-24T00:00:00-07:00",
          showDeleted: false,
        },
      })
      .then((r) => console.log(r.result));
  }

  return { loadClient, getCalendarList, getEventList };
};

export default function Google() {
  const { initClient, requestToken } = useGoogleIdentity();
  const { loadClient, getEventList } = useGApiClient();

  return (
    <div>
      <Head>
        <title>Time Box</title>
        <meta
          name="description"
          content="Get more out of your day with Time Box. Follow the time boxing template to organize your schedule and get more done."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        async
        defer
        src="https://apis.google.com/js/api.js"
        onLoad={loadClient}
      />
      <Script
        async
        defer
        src="https://accounts.google.com/gsi/client"
        onLoad={initClient}
      />
      <p>Say hello using the People API.</p>
      <button onClick={requestToken}>Authorize Google</button>
      <button onClick={getEventList}>Get Calendar Events</button>
      <div id="content"></div>
    </div>
  );
}
