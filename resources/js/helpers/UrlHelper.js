import without from 'lodash/without';

class UrlHelper {

  /** {URL} url */
  url;

  constructor (url) {
    const rg = new RegExp("https?:\/\/", "");
    const isAbsolute = rg.test(url);
    if (isAbsolute) {
      this.url = new URL(url);
    } else {
      const strUrl = `${window.location.protocol}//${window.location.host}${url}`;
      this.url = new URL(strUrl);
    }
  }

  getUrl = () => {
    return this.url;
  };

  getParams = () => {
    return new URLSearchParams(this.url.search.slice(1));
  };

  hasParam = (paramName) => {
    const params = this.getParams();
    return params.has(paramName);
  };

  getParam = (paramName) => {
    const params = this.getParams();
    if (params.has(paramName)) {
      return params.get(paramName);
    }
  };

  toString = () => {
    return this.url.toString();
  };

  getParamsAsString = () => {
    const params = this.getParams();
    let res = {};
    for (let param of params.entries()) {
      res[param[0]] = param[1];
    }

    return res;
  };

  change = () => {
    window.history.pushState({}, '', this.toString());
  };

  reset = () => {
    window.history.pushState({}, '', `${this.url.origin}${this.url.pathname}`);
  };

  replaceParam = (name, value) => {
    const params = this.url.searchParams;
    params.set(name, value);

    return this;
  };

  addParam = (name, value) => {
    const params = this.url.searchParams;
    if (params.has(name)) {
      const searchedParam = params.get(name);
      const arrParam = String(searchedParam).split(',');
      arrParam.push(value);
      params.set(name, arrParam.join(','));
    } else {
      params.set(name, value);
    }

    return this;
  };

  removeParam = (name, value = null) => {
    const params = this.url.searchParams;
    if (params.has(name)) {
      const param = params.get(name);
      if (param.includes(',')) {
        let arrParam = String(param).split(',');
        arrParam = without(arrParam, '');
        const resultValues = arrParam.filter(val => String(val) !== String(value));
        params.set(name, resultValues.join(','));
      } else {
        params.delete(name);
      }
    }

    return this;
  };
}

export default UrlHelper;