package org.gesternschau.database;

import org.gesternschau.database.stories.LimitedStoryObj;
import org.gesternschau.database.stories.StoryObj;

public class DatabaseService {
    public StoryObj[] retrieveContent() {
        return new StoryObj[] {new LimitedStoryObj()};
        // Connect to database and pull stories
    }
}
