import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withStore } from './withStore';

/**
 * @hoc Инициализирующая логика приложения
 */
export const withProviders = compose(withRouter, withStore);
