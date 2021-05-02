package com.skpandey.ipldashboard.repostories;

import com.skpandey.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
