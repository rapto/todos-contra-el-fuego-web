/* eslint-disable import/no-absolute-path */

import React from 'react';
import { year } from '@cleverbeagle/dates';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { translate } from 'react-i18next';
import { testId } from '/imports/ui/components/Utils/TestUtils';

import './Footer.scss';

const copyrightYear = () => {
  const currentYear = year();
  // moment(new Date()).format('YY');
  return currentYear === '2017' ? '2017' : `2017-${currentYear}`;
};

const Footer = (props) => {
  const { t } = props;
  return (
    <div className="Footer">
      <Grid>
        <p className="pull-left"><span className="reverse">&copy;</span><span className="d-none d-md-inline"> Copyleft</span> {copyrightYear()} <a href="https://comunes.org/"><span className="d-none d-md-inline">{t('OrgName')}</span><span className="d-inline d-md-none">{t('OrgName')}</span></a></p>

        <ul className="pull-right">
          <li>
            <Link id={testId('tos')} to="/terms">
              <span className="d-none d-lg-inline">{t('Términos de Servicio')}</span>
              <span className="d-lg-none">{t('Términos')}</span>
            </Link>
          </li>
          <li>
            <Link id={testId('privacy')} to="/privacy">
              <span className="d-none d-lg-inline">{t('Política de Privacidad')}</span>
              <span className="d-lg-none">{t('Privacidad')}</span>
            </Link>
          </li>
          <li><span className="d-none d-md-inline"><Link id={testId('license')} to="/license">{t('Licencia')}</Link></span></li>
          <li><span className="d-none d-md-inline"><Link id={testId('credits')} to="/credits">{t('Créditos')}</Link></span></li>
        </ul>
      </Grid>
    </div>
  );
};

Footer.propTypes = {};

export default translate([], { wait: true })(Footer);
