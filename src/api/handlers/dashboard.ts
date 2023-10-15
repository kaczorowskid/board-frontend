import { HttpMethod, apiCall } from 'api/apiCall';
import { apiUrls } from 'api/apiUrls';
import { GetDashboardRequest, GetDashboardResponse } from 'api/types';

export const getDashboard = async (
  payload: GetDashboardRequest
): Promise<GetDashboardResponse> => {
  const {
    dashboard: { getDashboard: get }
  } = apiUrls;

  const { data } = await apiCall<GetDashboardRequest, GetDashboardResponse>(
    get(payload.user_id),
    HttpMethod.GET
  );

  return data;
};
