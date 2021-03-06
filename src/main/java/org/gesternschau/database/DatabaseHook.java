package org.gesternschau.database;

import org.gesternschau.database.stories.StoryObj;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("rest")
public class DatabaseHook {

    @Path("getContent")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public StoryObj[] getStories() {
        DatabaseService dbService = new DatabaseService();
        return dbService.retrieveContent();
    }
}
