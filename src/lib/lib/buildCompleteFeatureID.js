

export default featureId => {
    return featureId.indexOf('notifiles-') === 0 ? `${featureId}` : `notifiles-${featureId}`
}
