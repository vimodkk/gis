ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_3 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Wayanad_panchayat_4 = new ol.format.GeoJSON();
var features_Wayanad_panchayat_4 = format_Wayanad_panchayat_4.readFeatures(json_Wayanad_panchayat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_panchayat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_panchayat_4.addFeatures(features_Wayanad_panchayat_4);
var lyr_Wayanad_panchayat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_panchayat_4, 
                style: style_Wayanad_panchayat_4,
                interactive: true,
                title: '<img src="styles/legend/Wayanad_panchayat_4.png" /> Wayanad_panchayat'
            });
var format_Wayanad_gadgil_5 = new ol.format.GeoJSON();
var features_Wayanad_gadgil_5 = format_Wayanad_gadgil_5.readFeatures(json_Wayanad_gadgil_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_gadgil_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_gadgil_5.addFeatures(features_Wayanad_gadgil_5);
var lyr_Wayanad_gadgil_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_gadgil_5, 
                style: style_Wayanad_gadgil_5,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_gadgil_5.png" /> Wayanad_gadgil'
            });
var format_Wayanad_kasthuri_6 = new ol.format.GeoJSON();
var features_Wayanad_kasthuri_6 = format_Wayanad_kasthuri_6.readFeatures(json_Wayanad_kasthuri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_kasthuri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_kasthuri_6.addFeatures(features_Wayanad_kasthuri_6);
var lyr_Wayanad_kasthuri_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_kasthuri_6, 
                style: style_Wayanad_kasthuri_6,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_kasthuri_6.png" /> Wayanad_kasthuri'
            });
var format_Wayanad_RF_7 = new ol.format.GeoJSON();
var features_Wayanad_RF_7 = format_Wayanad_RF_7.readFeatures(json_Wayanad_RF_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_RF_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_RF_7.addFeatures(features_Wayanad_RF_7);
var lyr_Wayanad_RF_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_RF_7, 
                style: style_Wayanad_RF_7,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_RF_7.png" /> Wayanad_RF'
            });
var format_Wayanad_PF_8 = new ol.format.GeoJSON();
var features_Wayanad_PF_8 = format_Wayanad_PF_8.readFeatures(json_Wayanad_PF_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_PF_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_PF_8.addFeatures(features_Wayanad_PF_8);
var lyr_Wayanad_PF_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_PF_8, 
                style: style_Wayanad_PF_8,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_PF_8.png" /> Wayanad_PF'
            });
var format_Wayanad_reservoir_9 = new ol.format.GeoJSON();
var features_Wayanad_reservoir_9 = format_Wayanad_reservoir_9.readFeatures(json_Wayanad_reservoir_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_reservoir_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_reservoir_9.addFeatures(features_Wayanad_reservoir_9);
var lyr_Wayanad_reservoir_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_reservoir_9, 
                style: style_Wayanad_reservoir_9,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_reservoir_9.png" /> Wayanad_reservoir'
            });
var format_Quarry_area_10 = new ol.format.GeoJSON();
var features_Quarry_area_10 = format_Quarry_area_10.readFeatures(json_Quarry_area_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quarry_area_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quarry_area_10.addFeatures(features_Quarry_area_10);
var lyr_Quarry_area_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Quarry_area_10, 
                style: style_Quarry_area_10,
                interactive: false,
                title: '<img src="styles/legend/Quarry_area_10.png" /> Quarry_area'
            });
var format_Landslide_11 = new ol.format.GeoJSON();
var features_Landslide_11 = format_Landslide_11.readFeatures(json_Landslide_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landslide_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landslide_11.addFeatures(features_Landslide_11);
var lyr_Landslide_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landslide_11, 
                style: style_Landslide_11,
                interactive: false,
                title: '<img src="styles/legend/Landslide_11.png" /> Landslide'
            });
var format_Wayanad_drainage_12 = new ol.format.GeoJSON();
var features_Wayanad_drainage_12 = format_Wayanad_drainage_12.readFeatures(json_Wayanad_drainage_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_drainage_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_drainage_12.addFeatures(features_Wayanad_drainage_12);
var lyr_Wayanad_drainage_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_drainage_12, 
                style: style_Wayanad_drainage_12,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_drainage_12.png" /> Wayanad_drainage'
            });
var format_Wayanad_sstream_NW_13 = new ol.format.GeoJSON();
var features_Wayanad_sstream_NW_13 = format_Wayanad_sstream_NW_13.readFeatures(json_Wayanad_sstream_NW_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_sstream_NW_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_sstream_NW_13.addFeatures(features_Wayanad_sstream_NW_13);
var lyr_Wayanad_sstream_NW_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_sstream_NW_13, 
                style: style_Wayanad_sstream_NW_13,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_sstream_NW_13.png" /> Wayanad_sstream_NW'
            });
var format_Wayanad_road_NW_14 = new ol.format.GeoJSON();
var features_Wayanad_road_NW_14 = format_Wayanad_road_NW_14.readFeatures(json_Wayanad_road_NW_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_road_NW_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_road_NW_14.addFeatures(features_Wayanad_road_NW_14);
var lyr_Wayanad_road_NW_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_road_NW_14, 
                style: style_Wayanad_road_NW_14,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_road_NW_14.png" /> Wayanad_road_NW'
            });
var format_Wayanad_NH_SH_15 = new ol.format.GeoJSON();
var features_Wayanad_NH_SH_15 = format_Wayanad_NH_SH_15.readFeatures(json_Wayanad_NH_SH_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_NH_SH_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_NH_SH_15.addFeatures(features_Wayanad_NH_SH_15);
var lyr_Wayanad_NH_SH_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_NH_SH_15, 
                style: style_Wayanad_NH_SH_15,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_NH_SH_15.png" /> Wayanad_NH_SH'
            });
var format_Wayanad_Lineament_16 = new ol.format.GeoJSON();
var features_Wayanad_Lineament_16 = format_Wayanad_Lineament_16.readFeatures(json_Wayanad_Lineament_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_Lineament_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_Lineament_16.addFeatures(features_Wayanad_Lineament_16);
var lyr_Wayanad_Lineament_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_Lineament_16, 
                style: style_Wayanad_Lineament_16,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_Lineament_16.png" /> Wayanad_Lineament'
            });
var format_Wayanad_Soil_piping_loc_17 = new ol.format.GeoJSON();
var features_Wayanad_Soil_piping_loc_17 = format_Wayanad_Soil_piping_loc_17.readFeatures(json_Wayanad_Soil_piping_loc_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_Soil_piping_loc_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_Soil_piping_loc_17.addFeatures(features_Wayanad_Soil_piping_loc_17);
var lyr_Wayanad_Soil_piping_loc_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_Soil_piping_loc_17, 
                style: style_Wayanad_Soil_piping_loc_17,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_Soil_piping_loc_17.png" /> Wayanad_Soil_piping_loc'
            });
var format_Wayanad_earthquake_18 = new ol.format.GeoJSON();
var features_Wayanad_earthquake_18 = format_Wayanad_earthquake_18.readFeatures(json_Wayanad_earthquake_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wayanad_earthquake_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wayanad_earthquake_18.addFeatures(features_Wayanad_earthquake_18);
var lyr_Wayanad_earthquake_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wayanad_earthquake_18, 
                style: style_Wayanad_earthquake_18,
                interactive: false,
                title: '<img src="styles/legend/Wayanad_earthquake_18.png" /> Wayanad_earthquake'
            });
var format_Touristplaces_19 = new ol.format.GeoJSON();
var features_Touristplaces_19 = format_Touristplaces_19.readFeatures(json_Touristplaces_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Touristplaces_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Touristplaces_19.addFeatures(features_Touristplaces_19);
var lyr_Touristplaces_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Touristplaces_19, 
                style: style_Touristplaces_19,
                interactive: false,
                title: '<img src="styles/legend/Touristplaces_19.png" /> Tourist places'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleTerrain_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(false);lyr_GoogleMaps_3.setVisible(false);lyr_Wayanad_panchayat_4.setVisible(true);lyr_Wayanad_gadgil_5.setVisible(false);lyr_Wayanad_kasthuri_6.setVisible(false);lyr_Wayanad_RF_7.setVisible(false);lyr_Wayanad_PF_8.setVisible(false);lyr_Wayanad_reservoir_9.setVisible(false);lyr_Quarry_area_10.setVisible(false);lyr_Landslide_11.setVisible(false);lyr_Wayanad_drainage_12.setVisible(false);lyr_Wayanad_sstream_NW_13.setVisible(false);lyr_Wayanad_road_NW_14.setVisible(false);lyr_Wayanad_NH_SH_15.setVisible(false);lyr_Wayanad_Lineament_16.setVisible(false);lyr_Wayanad_Soil_piping_loc_17.setVisible(false);lyr_Wayanad_earthquake_18.setVisible(false);lyr_Touristplaces_19.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleTerrain_1,lyr_GoogleSatellite_2,lyr_GoogleMaps_3,lyr_Wayanad_panchayat_4,lyr_Wayanad_gadgil_5,lyr_Wayanad_kasthuri_6,lyr_Wayanad_RF_7,lyr_Wayanad_PF_8,lyr_Wayanad_reservoir_9,lyr_Quarry_area_10,lyr_Landslide_11,lyr_Wayanad_drainage_12,lyr_Wayanad_sstream_NW_13,lyr_Wayanad_road_NW_14,lyr_Wayanad_NH_SH_15,lyr_Wayanad_Lineament_16,lyr_Wayanad_Soil_piping_loc_17,lyr_Wayanad_earthquake_18,lyr_Touristplaces_19];
lyr_Wayanad_panchayat_4.set('fieldAliases', {'PANCHAYAT': 'PANCHAYAT', });
lyr_Wayanad_gadgil_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'ESZ': 'ESZ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Wayanad_kasthuri_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'esa': 'esa', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Wayanad_RF_7.set('fieldAliases', {'FOREST': 'FOREST', 'forest_1': 'forest_1', });
lyr_Wayanad_PF_8.set('fieldAliases', {'PAS': 'PAS', });
lyr_Wayanad_reservoir_9.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_Quarry_area_10.set('fieldAliases', {'Quarry_NO': 'Quarry_NO', 'Place': 'Place', 'status': 'status', 'Shape_Area': 'Shape_Area', });
lyr_Landslide_11.set('fieldAliases', {'Id': 'Id', });
lyr_Wayanad_drainage_12.set('fieldAliases', {'Fnode_': 'Fnode_', 'Tnode_': 'Tnode_', 'Lpoly_': 'Lpoly_', 'Rpoly_': 'Rpoly_', 'Length': 'Length', 'Drain_line': 'Drain_line', 'Drain_li_1': 'Drain_li_1', 'Fnode1': 'Fnode1', 'Tnode1': 'Tnode1', 'Lpoly1': 'Lpoly1', 'Rpoly1': 'Rpoly1', 'Drain_leng': 'Drain_leng', 'Drn_arc_': 'Drn_arc_', 'Drn_arc_id': 'Drn_arc_id', 'Drn_order': 'Drn_order', 'Drn_code': 'Drn_code', 'Drn_type': 'Drn_type', 'Drn_descr': 'Drn_descr', });
lyr_Wayanad_sstream_NW_13.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Wayanad_road_NW_14.set('fieldAliases', {'name': 'name', 'highway': 'highway', });
lyr_Wayanad_NH_SH_15.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_Wayanad_Lineament_16.set('fieldAliases', {'FID_Lineam': 'FID_Lineam', 'Id': 'Id', 'Type_': 'Type_', 'FID_Kerala': 'FID_Kerala', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', });
lyr_Wayanad_Soil_piping_loc_17.set('fieldAliases', {'Name': 'Name', 'Dist': 'Dist', 'Taluk': 'Taluk', 'Panchayat': 'Panchayat', 'Geology': 'Geology', 'Elevation': 'Elevation', 'Landuse': 'Landuse', 'Soil': 'Soil', 'Types_of_P': 'Types_of_P', 'Remark': 'Remark', });
lyr_Wayanad_earthquake_18.set('fieldAliases', {'Id': 'Id', });
lyr_Touristplaces_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Wayanad_panchayat_4.set('fieldImages', {'PANCHAYAT': 'TextEdit', });
lyr_Wayanad_gadgil_5.set('fieldImages', {'OBJECTID': 'Range', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'ESZ': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Wayanad_kasthuri_6.set('fieldImages', {'OBJECTID': 'Range', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'esa': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Wayanad_RF_7.set('fieldImages', {'FOREST': 'TextEdit', 'forest_1': 'TextEdit', });
lyr_Wayanad_PF_8.set('fieldImages', {'PAS': 'TextEdit', });
lyr_Wayanad_reservoir_9.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_leve': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Quarry_area_10.set('fieldImages', {'Quarry_NO': 'TextEdit', 'Place': 'TextEdit', 'status': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Landslide_11.set('fieldImages', {'Id': 'Range', });
lyr_Wayanad_drainage_12.set('fieldImages', {'Fnode_': 'Range', 'Tnode_': 'Range', 'Lpoly_': 'Range', 'Rpoly_': 'Range', 'Length': 'TextEdit', 'Drain_line': 'Range', 'Drain_li_1': 'Range', 'Fnode1': 'Range', 'Tnode1': 'Range', 'Lpoly1': 'Range', 'Rpoly1': 'Range', 'Drain_leng': 'TextEdit', 'Drn_arc_': 'Range', 'Drn_arc_id': 'Range', 'Drn_order': 'Range', 'Drn_code': 'TextEdit', 'Drn_type': 'TextEdit', 'Drn_descr': 'TextEdit', });
lyr_Wayanad_sstream_NW_13.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Wayanad_road_NW_14.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', });
lyr_Wayanad_NH_SH_15.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Wayanad_Lineament_16.set('fieldImages', {'FID_Lineam': 'Range', 'Id': 'Range', 'Type_': 'Range', 'FID_Kerala': 'Range', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', });
lyr_Wayanad_Soil_piping_loc_17.set('fieldImages', {'Name': 'TextEdit', 'Dist': 'TextEdit', 'Taluk': 'TextEdit', 'Panchayat': 'TextEdit', 'Geology': 'TextEdit', 'Elevation': 'TextEdit', 'Landuse': 'TextEdit', 'Soil': 'TextEdit', 'Types_of_P': 'TextEdit', 'Remark': 'TextEdit', });
lyr_Wayanad_earthquake_18.set('fieldImages', {'Id': 'Range', });
lyr_Touristplaces_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Wayanad_panchayat_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PANCHAYAT': 'header label', 'DISTRICT': 'no label', });
lyr_Wayanad_gadgil_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'ESZ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Wayanad_kasthuri_6.set('fieldLabels', {'OBJECTID': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'esa': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Wayanad_RF_7.set('fieldLabels', {'FOREST': 'no label', 'forest_1': 'no label', });
lyr_Wayanad_PF_8.set('fieldLabels', {'PAS': 'no label', });
lyr_Wayanad_reservoir_9.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_Quarry_area_10.set('fieldLabels', {'Quarry_NO': 'no label', 'Place': 'no label', 'status': 'no label', 'Shape_Area': 'header label', });
lyr_Landslide_11.set('fieldLabels', {'Id': 'no label', });
lyr_Wayanad_drainage_12.set('fieldLabels', {'Fnode_': 'no label', 'Tnode_': 'no label', 'Lpoly_': 'no label', 'Rpoly_': 'no label', 'Length': 'no label', 'Drain_line': 'no label', 'Drain_li_1': 'no label', 'Fnode1': 'no label', 'Tnode1': 'no label', 'Lpoly1': 'no label', 'Rpoly1': 'no label', 'Drain_leng': 'no label', 'Drn_arc_': 'no label', 'Drn_arc_id': 'no label', 'Drn_order': 'no label', 'Drn_code': 'no label', 'Drn_type': 'no label', 'Drn_descr': 'no label', });
lyr_Wayanad_sstream_NW_13.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Wayanad_road_NW_14.set('fieldLabels', {'name': 'no label', 'highway': 'no label', });
lyr_Wayanad_NH_SH_15.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'other_tags': 'no label', });
lyr_Wayanad_Lineament_16.set('fieldLabels', {'FID_Lineam': 'no label', 'Id': 'no label', 'Type_': 'no label', 'FID_Kerala': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', });
lyr_Wayanad_Soil_piping_loc_17.set('fieldLabels', {'Name': 'no label', 'Dist': 'no label', 'Taluk': 'no label', 'Panchayat': 'no label', 'Geology': 'no label', 'Elevation': 'no label', 'Landuse': 'no label', 'Soil': 'no label', 'Types_of_P': 'no label', 'Remark': 'no label', });
lyr_Wayanad_earthquake_18.set('fieldLabels', {'Id': 'no label', });
lyr_Touristplaces_19.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Touristplaces_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});