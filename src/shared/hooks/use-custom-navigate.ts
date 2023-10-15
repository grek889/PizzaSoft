import { type NavigateOptions, useNavigate } from 'react-router-dom';
import { createUrlWithParams } from '@/shared/libs/create-url-with-params';

/**
 * Хук работающий точно как и useNavigate,
 * но с возможностью прокидывать параметры к URL
 *
 * @example
 * const navigate = useCustomNavigate();
 * navigate('/products/:catId/:id', { catId: 5, id: 1 });
 */
export const useCustomNavigate = () => {
  const navigate = useNavigate();

  return (
    path: string,
    params: Record<string, string | number> = {},
    options?: NavigateOptions
  ) => {
    navigate(createUrlWithParams(path, params), options);
  };
};
