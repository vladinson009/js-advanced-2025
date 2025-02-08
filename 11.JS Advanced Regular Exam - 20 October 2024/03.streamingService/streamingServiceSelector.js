const streamingServiceSelector = {
  selectingContent(type, platform, genre) {
    const supportedGenres = [
      'Action',
      'Comedy',
      'Drama',
      'Thriller',
      'Horror',
      'Romance',
      'Sci-Fi',
    ];
    if (!supportedGenres.includes(genre)) {
      throw new Error(
        `We currently support these genres: ${supportedGenres.join(', ')}.`
      );
    }
    if (type !== 'Movie' && type !== 'TV Show') {
      throw new Error(`We currently only support 'Movie' or 'TV Show' types.`);
    }
    return `You can watch this ${genre} ${type} on ${platform}. Enjoy your ${genre}-filled experience!`;
  },

  availablePlatforms(platforms, selectedPlatformIndex) {
    if (
      !Array.isArray(platforms) ||
      !Number.isInteger(selectedPlatformIndex) ||
      selectedPlatformIndex < 0 ||
      selectedPlatformIndex >= platforms.length
    ) {
      throw new Error('Invalid platform selection.');
    }
    let available = platforms.filter((_, index) => index !== selectedPlatformIndex);
    return `Other available platforms are: ${available.join(', ')}.`;
  },

  contentRating(runtimeInMinutes, viewerRating) {
    let runtimeInHours = (runtimeInMinutes / 60).toFixed(2);
    if (
      typeof runtimeInMinutes !== 'number' ||
      runtimeInMinutes <= 0 ||
      typeof viewerRating !== 'number' ||
      viewerRating < 0 ||
      viewerRating > 10
    ) {
      throw new Error('Invalid runtime or rating.');
    }
    if (viewerRating >= 7) {
      return `This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`;
    } else {
      return `This content has a lower rating (${viewerRating}/10) and runs for ${runtimeInHours} hours. You might want to check reviews first.`;
    }
  },
};

export default streamingServiceSelector;
