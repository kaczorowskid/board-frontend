import { HttpMethod, apiCall, apiUrls } from 'utils';
import {
  GetDashboardRequest,
  GetDashboardResponse
} from './types/dashboard.type';

export const getDashboard = async (
  payload: GetDashboardRequest
): Promise<GetDashboardResponse> => {
  const {
    dashboard: { getDashboard: get }
  } = apiUrls;

  const { data } = await apiCall<GetDashboardRequest, GetDashboardResponse>(
    get(payload.user_id),
    HttpMethod.GET,
    payload
  );

  return data;
};
