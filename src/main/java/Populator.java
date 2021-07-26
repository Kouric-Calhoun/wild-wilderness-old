import com.wildernesswild.wildernesswild.models.Regions;
import com.wildernesswild.wildernesswild.models.Scenarios;
import com.wildernesswild.wildernesswild.repositories.RegionsRepository;
import com.wildernesswild.wildernesswild.repositories.ScenariosRepository;
import com.wildernesswild.wildernesswild.repositories.SkillsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private RegionsRepository regionsRepo;
    @Resource
    private ScenariosRepository scenariosRepo;
    @Resource
    private SkillsRepository skillsRepo;

    @Override
    public void run(String... args) throws Exception {
        Regions northEast = new Regions("https://xxxx.com","North East","Warm","North East xxxx","Pic", "east of Ohio Valley",
                "normal");
        regionsRepo.save(northEast);
        Scenarios startFire = new Scenarios("How to start a fire", "pic", "Fire", northEast);
    }
}
