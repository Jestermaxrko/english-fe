import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Query, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, /*Bar, BarChart*/ } from 'recharts';
import DictionaryTabs from '../DictionariesTabs';
import Spinner from '../../../shared/elements/Spinner';

const ACTIVITY_QUERY = gql`
  query dayAggs($dictionaryId: String!) {
    dayAggs(dictionaryId: $dictionaryId) {
      total
      date
    }
  }
`;

const Activity = ({ match, client }) => {
  return (
    <Query query={ACTIVITY_QUERY} variables={{ dictionaryId: match.params.id }}>
      {({ data, loading, error }) => {
        if (loading) return <Spinner/>;
        if (error) return <Redirect to='/dictionaries' />;
        if (data) {
          const { dayAggs } = data;
          client.writeData({ data: { dayAggs, activeDictionary: match.params.id } });

          return (
            <Fragment>
              <DictionaryTabs />
              <div className='flex flex-column flex-justify-center flex-align-center full-height just'>

                {dayAggs.length ? 
                  <LineChart width={500} height={200} data={dayAggs}
                    margin={{ top: 5, bottom: 5 }}>
                    <XAxis dataKey="date" tickFormatter={value => moment(parseInt(value, 10)).format('DD MMM')} />
                    <YAxis />
                    <CartesianGrid vertical={false} />
                    <Tooltip
                      formatter={value => `Words: ${value}`}
                      labelFormatter={value => moment(parseInt(value, 10)).format('DD MMM')} />

                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                  </LineChart>
                  : <div> No activity yet</div>}

                {/* <BarChart
                  width={500}
                  height={200}
                  data={dayAggs}
                  margin={{
                    top: 5, bottom: 5,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="date" tickFormatter={value => moment(parseInt(value, 10)).format('DD MMM')} />
                  <YAxis />
                  <Tooltip
                    formatter={value => `Words: ${value}`}
                    labelFormatter={value => moment(parseInt(value, 10)).format('DD MMM')} />
                  <Bar dataKey="total" fill="#8884d8" />
                </BarChart> */}
              </div>

            </Fragment>

          );
        }
      }}
    </Query>

  );
};

export default withApollo(Activity);

