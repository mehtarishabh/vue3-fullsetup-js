import {app} from '@/main';

const lifeTime = import.meta.env.APP_TOAST_LIFETIME;

export function info(title = "I am title", body = "I am body") {
  app.config.globalProperties.$toast.add({
    severity: 'info',
    summary: title,
    detail: body,
    life: lifeTime,
  });
}

export function error(title = "I am title", body = "I am body") {
  app.config.globalProperties.$toast.add({
    severity: 'error',
    summary: title,
    detail: body,
    life: lifeTime,
  });
}
