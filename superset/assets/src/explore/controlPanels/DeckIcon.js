/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/translation';
import timeGrainSqlaAnimationOverrides from './timeGrainSqlaAnimationOverrides';

export default {
  requiresTime: true,
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['adhoc_filters'],
        ['row_limit', null],
        ['spatial'],
        ['all_columns'],
//        ['reverse_long_lat', 'filter_nulls'],
      ],
    },
    {
      label: t('Map'),
      expanded: true,
      controlSetRows: [
        ['mapbox_style', 'viewport'],
        ['autozoom', null],
      ],
    },
    {
      label: t('Icon'),
      controlSetRows: [
        ['color_picker' ],
//        ['dimension', 'color_scheme', 'label_colors'],
//        ['stroke_width', 'legend_position'],
      ],
    },
//    {
//      label: t('Icon'),
//      controlSetRows: [
//        ['color_picker', 'target_color_picker'],
//        ['dimension', 'color_scheme', 'label_colors'],
//        ['stroke_width', 'legend_position'],
//      ],
//    },

  ],
  controlOverrides: {
    metric: {
      validators: [],
    },
//    line_column: {
//      label: t('Polygon Column'),
//    },
//    line_type: {
//      label: t('Polygon Encoding'),
//    },
//    point_radius_fixed: {
//      label: t('Elevation'),
//    },
    time_grain_sqla: timeGrainSqlaAnimationOverrides,
  },
};
