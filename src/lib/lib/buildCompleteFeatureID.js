

export default featureId => {
    return featureId.indexOf('mastermail-') === 0 ? `${featureId}` : `mastermail-${featureId}`
}
