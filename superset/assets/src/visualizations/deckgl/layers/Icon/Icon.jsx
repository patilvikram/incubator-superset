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
import { IconLayer } from 'deck.gl';
import React from 'react';
import { t } from '@superset-ui/translation';
import { commonLayerProps } from '../common';
import { createCategoricalDeckGLComponent } from '../../factory';
import TooltipRow from '../../TooltipRow';

function getPoints(data) {
  const points = [];
  data.forEach((d) => {
    console.log("Adding point",d);
    points.push(d.spatial);
  });
  return points;
}

const ICON_MAPPING = {
 airplane : {

   x:0,
   y:0,
   width: 512,
   height: 512
   }
}
function setTooltip(object, x, y) {
  console.log("On Hover called");
  const el = document.getElementById('tooltip');
  if (object) {
    el.innerHTML = object.NUMBER;
    el.style.display = 'block';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  } else {
    el.style.display = 'none';
  }
}



/**
function setTooltipContent(object, x, y) {
  return o => (
    <div className="deckgl-tooltip">
      <TooltipRow label={`${t('Start (Longitude, Latitude)')}: `} value={`${o.object.sourcePosition[0]}, ${o.object.sourcePosition[1]}`} />
      <TooltipRow label={`${t('End (Longitude, Latitude)')}: `} value={`${o.object.targetPosition[0]}, ${o.object.targetPosition[1]}`} />
      {
        formData.dimension && <TooltipRow label={`${formData.dimension}: `} value={`${o.object.cat_color}`} />
      }
    </div>
  );
}
*/

function setTooltipContent(o) {

  return  (
    <div className="deckgl-tooltip">
    <TooltipRow label={`${t('Testing')}`} value = {`${o.object.NUMBER}`} />
    </div>
  );
}
export function getLayer(fd, payload, onAddFilter, setTooltip) {
    console.log(fd);
  console.log("payload:",payload);
  const data = payload.data.features;
  console.log("data:",data);
  const sc = fd.color_picker;
  console.log("sc:",sc);
  return new IconLayer({
    id: `path-layer-${fd.slice_id}`,
    data,
    sizeScale: 40,
    iconAtlas : 'https://raw.githubusercontent.com/Swizec/webgl-airplanes-map/master/src/airplane-icon.jpg',
    iconMapping: ICON_MAPPING,
    getColor: d =>  sc,
    getPosition: d => { console.log("Points data",d); return d.spatial;},
     getSize: d => 1,
     getIcon: d => 'airplane',
     pickable: true,
     ...commonLayerProps(fd, setTooltip, setTooltipContent),
  });
}

export default createCategoricalDeckGLComponent(getLayer, getPoints);
