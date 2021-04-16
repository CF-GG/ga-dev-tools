// Copyright 2020 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// All static links on the site should be put into this enum. This makes it
// easier to update all instances of a link on the site.
export enum Url {
  ga4AdminAPI = "https://developers.google.com/analytics/devguides/config/admin/v1",
  aboutCampaign = "https://support.google.com/analytics/answer/1033863?visit_id=637529082348651695-136101741&rd=1",
  aboutCustomCampaigns = "https://support.google.com/analytics/answer/1033863",
  bestPracticesForCreatingCustomCampaigns = "https://support.google.com/analytics/answer/1037445",
  aboutReferralTrafficReport = "https://support.google.com/analytics/topic/3125765?visit_id=637529082348651695-136101741&rd=2",
  aboutTrafficSourceDimensions = "https://support.google.com/analytics/answer/1033173",
  googleAdsAutoTagging = "https://support.google.com/google-ads/answer/1752125",
  iosCampaignMeasurement = "https://developers.google.com/analytics/devguides/collection/ios/v3/campaigns#url-builder",
  googlePlayURLBuilder = "https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#google-play-url-builder",
  gaDebugger = "https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna",
  analyticsJSDevsite = "https://developers.google.com/analytics/devguides/collection/analyticsjs/",
  analyticsJSEnhancedEcommerce = "https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce",
  googleTagManagerEnhancedEcommerce = "https://developers.google.com/tag-manager/enhanced-ecommerce",
  enhancedEcommerceHelpCenter = "https://support.google.com/analytics/answer/6014841",
  enhancedEcommerceDemo = "https://enhancedecommerce.appspot.com/",
  gaDevToolsGitHub = "https://github.com/googleanalytics/ga-dev-tools",
  gaDevToolsGitHubNewIssue = "https://github.com/googleanalytics/ga-dev-tools/issues/new",
  gaDevsite = "http://developers.google.com/analytics",
  gaDevsiteHelp = "http://developers.google.com/analytics/help/",
  reportingApis = "https://developers.google.com/analytics/devguides/reporting/",
  spreadsheetAddOn = "https://developers.google.com/analytics/solutions/google-analytics-spreadsheet-add-on",
  spreadsheetAddOnExternal = "https://gsuite.google.com/marketplace/app/google_analytics/477988381226",
  tagAssistantExternal = "https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk",
  crossDomainMeasurement = "https://developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain",
  protocolParameters = "https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters",
  commonHits = "https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#commonhits",
  crossDomainLinker = "https://developers.google.com/analytics/devguides/collection/analyticsjs/linker",
  aboutTagAssistant = "https://support.google.com/tagassistant/answer/2947093",
  aboutTagAssistantRecordings = "https://support.google.com/analytics/answer/6277302",
  measurementProtocol = "https://developers.google.com/analytics/devguides/collection/protocol/v1",
  validatingMeasurement = "https://developers.google.com/analytics/devguides/collection/protocol/v1/validating-hits",
  coreReportingApi = "https://developers.google.com/analytics/devguides/reporting/core/v3/",
}

export enum GAVersion {
  UniversalAnalytics = "ua",
  GoogleAnalytics4 = "ga4",
}

// All data in localStorage should have its keys here.
export enum StorageKey {
  gaVersion = "/ga-version",
  uaDimensions = "//ua-dimensions",
  uaSegments = "//ua-segments",
  viewSelectorData = "//view-selector/data",

  // GA4 Dimensions and metrics explorer
  ga4DimensionsMetricsSearch = "/ga4/dimensions-metrics-explorer/search",
  ga4DimensionsMetricsFields = "/ga4/dimensions-metrics-explorer/fields",
  ga4DimensionsMetricsAccountSummaries = "/ga4/dimensions-metrics-explorer/account-summaries",
  ga4DimensionsMetricsSelectedAccount = "/ga4/dimensions-metrics-explorer/selected-account",
  ga4DimensionsMetricsSelectedProperty = "/ga4/dimensions-metrics-explorer/selected-property",

  // Query Explorer
  queryExplorerDimensions = "query-explorer/dimensions",
  queryExplorerMetrics = "query-explorer/metrics",
  queryExplorerSegment = "query-explorer/segment",
  queyExplorerSamplingLevel = "query-explorer/sampling-level",
  queryExplorerShowSegmentDefinition = "query-explorer/show-segment-definition",
  queryExplorerStartDate = "query-explorer/start-date",
  queryExplorerEndDate = "query-explorer/end-date",
  queryExplorerStartIndex = "query-explorer/start-index",
  queryExplorerMaxResults = "query-explorer/max-results",
  queryExplorerFilters = "query-explorer/filters",
  queryExplorerIncludeEmptyRows = "query-explorer/include-empty-rows",
  queryExplorerSort = "query-explorer/sort",

  // Dimensions and metrics explorer
  dimensionsMetricsExplorerColumns = "dimensions-metrics-explorer/columns",
  dimensionsMetricsExplorerSearch = "dimensions-metrics-explorer/search",
  dimensionsMetricsExplorerAllowDeprecated = "dimensions-metrics-explorer/allow-deprecated",
  dimensionsMetricsExplorerOnlySegments = "dimensions-metrics-explorer/only-segments",

  campaignBuilderWebsiteUrl = "campaign-builder/website-url",
  campaignBuilderSource = "campaign-builder/source",
  campaignBuilderMedium = "campaign-builder/medium",
  campaignBuilderName = "campaign-builder/name",
  campaignBuilderTerm = "campaign-builder/term",
  campaignBuilderContent = "campaign-builder/content",
  campaignBuilderUseFragment = "campaign-builder/use-fragment",
  bitlyAccessToken = "bitly-auth/access-token",
  bitlyCache = "bitly-auth/cache-storage",
  requestComposerTab = "request-composer/tab",

  histogramRequestDimensions = "request-composer/histogram-request-dimensions",
  histogramRequestMetrics = "request-composer/histogram-request-metrics",
  histogramBuckets = "request-composer/histogram-buckets",
  histogramStartDate = "request-composer/histogram-start-date",
  histogramEndDate = "request-composer/histogram-end-date",
  histogramFiltersExpression = "request-composer/histogram-filters-expression",
  histogramRequestSegment = "request-composer/histogram-request-segment",
  histogramSamplingLevel = "request-composer/histogram-sampling-level",
  histogramRequestShowSegmentDefinition = "request-composer/histogram-request-show-segment-definition",

  cohortRequestSamplingLevel = "request-composer/cohort-request-sampling-level",
  cohortRequestMetric = "request-composer/cohort-request-metric",
  cohortRequestCohortSize = "request-composer/cohort-request-cohort-size",
  cohortRequestSegment = "request-composer/cohort-request-segment",
  cohortRequestShowSegmentDefinition = "request-composer/cohort-request-show-segment-definition",

  pivotRequestMetrics = "request-composer/pivot-request-metrics",
  pivotRequestPivotMetrics = "request-composer/pivot-request-pivot-metrics",
  pivotRequestSegment = "request-composer/pivot-request-segment",
  pivotSamplingLevel = "request-composer/pivot-sampling-level",
  pivotRequestDimensions = "request-composer/pivot-request-dimensions",
  pivotRequestPivotDimensions = "request-composer/pivot-request-pivot-dimensions",
  pivotRequestStartDate = "request-composer/pivot-request-start-date",
  pivotRequestEndDate = "request-composer/pivot-request-end-date",
  pivotRequestStartGroup = "request-composer/pivot-request-start-group",
  pivotRequestMaxGroupCount = "request-composer/pivot-request-max-group-count",
  pivotRequestPageToken = "request-composer/pivot-request-page-token",
  pivotRequestPageSize = "request-composer/pivot-request-page-size",
  pivotRequestIncludeEmptyRows = "request-composer/pivot-request-include-empty-rows",
  pivotRequestShowSegmentDefinition = "request-composer/pivot-request-show-segment-definition",

  metricExpressionRequestDimensions = "request-composer/metric-expression-request-dimensions",
  metricExpressionRequestSegment = "request-composer/metric-expression-request-segment",
  metricExpressionSamplingLevel = "request-composer/metric-expression-sampling-level",
  metricExpressionStartDate = "request-composer/metric-expression-start-date",
  metricExpressionEndDate = "request-composer/metric-expression-end-date",
  metricExpressionMetricExpressions = "request-composer/metric-expression-metric-expressions",
  metricExpressionMetricAliases = "request-composer/metric-expression-metric-aliases",
  metricExpressionFiltersExpression = "request-composer/metric-expression-filters-expression",
  metricExpressionPageToken = "request-composer/metric-expression-page-token",
  metricExpressionPageSize = "request-composer/metric-expression-page-size",
  metricExpressionRequestShowSegmentDefinition = "request-composer/metric-expression-show-segment-definition",

  eventBuilderCategory = "ga4/event-builder/event-category",
  eventBuilderApiSecret = "ga4/event-builder/api-secret",
  eventBuilderFirebaseAppId = "ga4/event-builder/firebase-app-id",
  eventBuilderMeasurementId = "ga4/event-builder/measurement-id",
  eventBuilderAppInstanceId = "ga4/event-builder/app-instance-id",
  eventBuilderClientId = "ga4/event-builder/client-id",
  eventBuilderUserId = "ga4/event-builder/user-id",
  eventBuilderTimestampMicros = "ga4/event-builder/timestamp-micros",
  eventBuilderNonPersonalizedAds = "ga4/event-builder/non-personalized-ads",
}

export const EventAction = {
  bitlyShorten: "bitly_shorten",
  bitlyAuth: "bitly_auth",
}

export const EventCategory = {
  campaignUrlBuilder: "Campaign URL Builder",
}
