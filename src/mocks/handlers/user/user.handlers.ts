import { http, HttpResponse } from 'msw';
import { apiUrls } from 'api';
import { LoginParams } from './user.types';
import { correctUserPass } from './user.schema';
import { userLogin } from './user.responses';

const {
  user: { login }
} = apiUrls;

export const userHandlers = [
  http.post<LoginParams>(`${login}`, ({ params }) => {
    const { email, password } = params;
    const { email: correctEmail, password: correctPassword } = correctUserPass;

    if (!email || !password) {
      return HttpResponse.json({}, { status: 409 });
    }

    if (email !== correctEmail && password !== correctPassword) {
      return HttpResponse.json({}, { status: 409 });
    }

    return HttpResponse.json(userLogin, { status: 200 });
  })
];
