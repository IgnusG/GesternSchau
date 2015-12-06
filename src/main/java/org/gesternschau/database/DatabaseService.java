package org.gesternschau.database;

import org.gesternschau.database.stories.LimitedStory;
import org.gesternschau.database.stories.Story;

public class DatabaseService {
    public Story[] retrieveContent() {
        return new Story[] {new LimitedStory()};
        // Connect to database and pull stories
    }
}
