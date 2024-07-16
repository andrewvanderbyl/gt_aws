package za.co.runapp.service;

import lombok.RequiredArgsConstructor;
import za.co.runapp.entity.Club;
import za.co.runapp.entity.Event;
import za.co.runapp.entity.User;
import za.co.runapp.repository.AsaRepository;
import za.co.runapp.repository.ClubRepository;
import za.co.runapp.repository.EventRepository;
import za.co.runapp.repository.RaceRepository;
import za.co.runapp.repository.TagRepository;
import za.co.runapp.repository.UserEventRepository;
import za.co.runapp.repository.UserRaceRepository;
import za.co.runapp.repository.UserRepository;

@RequiredArgsConstructor
public class ImporterService {

    private final UserRepository userRepository;
    private final ClubRepository clubRepository;
    private final EventRepository eventRepository;
    private final UserEventRepository userEventRepository;
    private final RaceRepository raceRepository;
    private final UserRaceRepository userRaceRepository;
    private final AsaRepository asaRepository;
    private final TagRepository tagRepository;

    /**
     * TRACE:
     *     User user = findUser
     *     Exists ?
     *     N -> log
     *     Y ->
     *         Club club = findClub
     *         Exists ?
     *         N -> log
     *         Y ->
     *             Event event = findEvent
     *             Exists ?
     *             N -> log
     *             Y ->
     *                 Is user registered for event ?
     *                 N -> log
     *                 Y ->
     *                     Add race
     *                     ASA asa = findASA ?
     *                     Exists ?
     *                     N -> create + log
     *                     Y ->
     *                         Tag tag = findTag ?
     *                         Exists ?
     *                         N -> create + log
     *                         Y -> ignore
     */
    public void doStuff () {
        User user = userRepository.findByFirstNameAndLastName(null, null);
        if (user == null) {

        }

        //processForClub(user, null);
        processForEvent(user, null);
        processForRace(user, null, 0, 0, null);
        processForAsa(user, null);
        processForTimingChip(user, null);

    }

    private void processForClub(final User user, final String clubName) {
//        boolean clubPresent = clubRepository.existsByNameAndUsers(null, user);
//        if (clubPresent) {
//
//        }
    }

    private void processForEvent(final User user, final String eventName) {
        boolean eventPresent = eventRepository.existsByName(null);
        if (eventPresent) {

        }
    }

    private void processForRace(final User user, final String eventName, final int distance, final int position, final String time) {
    }

    private void processForAsa(final User user, final String asa) {

    }

    private void processForTimingChip(final User user, final String timingChip) {

    }
}
