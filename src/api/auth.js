import cookies from "browser-cookies";
const MS_IN_ONE_SECOND = 1000;
const MS_IN_ONE_MINUTE = MS_IN_ONE_SECOND * 60;
const MS_IN_ONE_HOUR = MS_IN_ONE_MINUTE * 60;
const MS_IN_ONE_DAY = MS_IN_ONE_HOUR * 24;

export const SESSION_TIMEOUT = 7 * MS_IN_ONE_DAY;

export const LOGIN_KEY = "BB_LOGIN";
export const LOGOUT_KEY = "BB_LOGOUT";

export const storage = localStorage;

export class Auth {
  static read() {
    try {
      storage.removeItem(LOGOUT_KEY);
      return new Auth(JSON.parse(storage.getItem(LOGIN_KEY)));
    } catch (err) {
      return new Auth({});
    }
  }

  constructor(props) {
    Object.assign(
      this,
      {
        lastUpdate: new Date().toISOString(),
      },
      props
    );
  }

  delete() {
    storage.removeItem(LOGIN_KEY);
    storage.setItem(LOGOUT_KEY, true);
  }

  write(props) {
    Object.assign(
      this,
      {
        lastUpdate: new Date().toISOString(),
      },
      props
    );
    storage.setItem(LOGIN_KEY, JSON.stringify(this.toJSON()));
    return this;
  }

  get stale() {
    return this.lastUpdate && this.expires <= 0;
  }
  get expires() {
    const ts =
      new Date(this.lastUpdate || 0).getTime() +
      SESSION_TIMEOUT -
      new Date().getTime();
    return ts > 0 ? Math.floor(ts / 1000) : 0;
  }
  toJSON() {
    const { stale, ...rest } = this;
    return rest;
  }
}

export default Auth;
