function getJson(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) return text
  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}
export const ajax = (option) => {
  let xhr = new XMLHttpRequest()
  xhr.open("POST", option.action, true)
  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(new Error(option.action + ': '+ xhr.status + ' ' + (xhr.response && xhr.response.error || xhr.responseText || xhr.response)));
    }
    option.onSuccess(getJson(xhr))
  };
  xhr.onerror = (e) => {
    option.onError(e)
  }
  if (xhr.upload) {
    xhr.upload.onprogress = (e) => {
      if (e.total > 0) e.percent = e.loaded / e.total * 100
      option.onProgress(e)
    };
  }

  const formData = new FormData();
  if (option.data) {
    Object.keys(option.data).forEach(key => {
      formData.append(key, option.data[key]);
    });
  }
  formData.append(option.filename, option.file, option.file.name);

  const headers = option.headers || {};

  for (let item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }

  xhr.send(formData);
  return xhr
}
