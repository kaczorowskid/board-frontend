import { http, HttpResponse } from 'msw';
import { apiUrls } from 'api';

const {
  user: { login }
} = apiUrls;

export const userHandlers = [
  http.post<{ email: string; password: string }>(`${login}`, ({ params }) => {
    const email = params.email;
    const password = params.password;

    if (!email || !password) {
      return HttpResponse.json({});
    }

    return HttpResponse.json(userLogin);
  })
];
